import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt", // Using JWT for session management
  },

  pages: {
    signIn: "/login", // Custom sign-in page
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Enter your username" },
        password: { label: "Password", type: "password", placeholder: "Enter your password" },
      },

      async authorize(credentials, req) {
        try {
          // Call external API for login
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          });

          if (!res.ok) {
            throw new Error("Invalid username or password");
          }

          const data = await res.json();

          // Verify that token exists in the response
          if (data?.token) {
            // Return user object for NextAuth
            return {
              // id: data.user.id,
              // username: data.user.username,
              token: data.token,
            };
          }

          return null; // Login failed
        } catch (error) {
          console.error("Login Error:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    // Save JWT token and user data into the session
    async jwt({ token, user }: any) {
      if (user?.token) {
        // Decode ข้อมูลจาก token ด้วย library เช่น 'jsonwebtoken'
        const decoded = JSON.parse(atob(user.token.split(".")[1])); // ตัวอย่างการ decode
        token.user_id = decoded.user_id;
        token.fullname = decoded.fullname;
        token.username = decoded.username;
        token.token = user.token; // เก็บ token ด้วย
      }
      return token;
    },

    // Make token data available in the session
    async session({ session, token }: any) {
      session.user = {
        id: token.user_id,
        fullname: token.fullname,
        username: token.username,
      };
      session.token = token.token; // ส่ง token กลับไปให้ client ใช้
      return session;
    },
  },
});

export { handler as GET, handler as POST };
