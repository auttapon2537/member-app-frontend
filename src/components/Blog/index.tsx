'use client'

import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
// import blogData from "./blogData";
import { useEffect, useState, useRef } from 'react';
import { useSession } from "next-auth/react";
import { getPrivilegeByUserID } from '@/services/api/privilegeService';

const Blog = () => {
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const initialized = useRef(false);
  const { data: session } = useSession();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (!initialized.current && session) {
      initialized.current = true;
      init();
    }
  }, [session]);

  async function init() {
    setLoading(true);
    try {
      const response: any = await getPrivilegeByUserID(session.user.id || 0);
      setItems(response);
    } catch (error) {
      // toast.error(<Text as="b">Get Bookings failed</Text>);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="All privileges"
          paragraph=""
          center
        />

        {!isLoading && (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {items.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
