'use client'

import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { useEffect, useState, useRef } from 'react';
import { useSession } from "next-auth/react";
import { getPrivilegeByID, redeemPrivilege } from '@/services/api/privilegeService';

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  const [item, setItem] = useState<any>({});
  const [isLoading, setLoading] = useState(false);
  const [fullImageUrl, setFullImageUrl] = useState("");
  const [points, setPoints] = useState("");
  const initialized = useRef(false);
  const { data: session } = useSession();

  useEffect(() => {
    const value = localStorage.getItem('myPoints');
    setPoints(value)
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
      const response: any = await getPrivilegeByID(params.id, session.user.id);
      setItem(response);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Fetch API URL from .env
      setFullImageUrl(`${apiUrl}${response.image}`); // Combine API URL with image path
      console.log(fullImageUrl);
    } catch (error) {
      // toast.error(<Text as="b">Get Bookings failed</Text>);
    } finally {
      setLoading(false);
    }
  }

  async function redeem() {
    setLoading(true);
    try {
      let data = {
        "user_id": parseInt(session.user.id),
        "privilege_id": parseInt(params.id)
      }
      const response: any = await redeemPrivilege(data);
      setItem(response);
    } catch (error) {
      // toast.error(<Text as="b">Get Bookings failed</Text>);
    } finally {
      init()
      setLoading(false);
    }
  }

  console.log(points)
  console.log(item?.points_required)

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12 ">
              <div>
                <div className="flex flex-wrap items-center justify-between">
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    {item?.product_name}
                  </h2>
                  <div className="mb-5">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      {item?.points_required?.toLocaleString()} points
                    </a>
                  </div>
                </div>

                <div>
                  {/* <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p> */}
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/50]">
                      {fullImageUrl && <Image
                        src={fullImageUrl}
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />}
                    </div>
                  </div>
                </div>
                <div className="text-center mb-5">
                  <a
                    href="#"
                    onClick={redeem}
                    className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white ${item?.redeemed || points < item?.points_required ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary-dark"
                      } w-full max-w-xs`}
                    style={{ pointerEvents: item?.redeemed || points < item?.points_required ? "none" : "auto" }}
                  >
                    {/* {item?.redeemed ? "Redeemed" : "Redeem"} */}
                    {item?.redeemed ? "Redeemed" : points < item?.points_required ? "Points not enough" : "Redeem"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
