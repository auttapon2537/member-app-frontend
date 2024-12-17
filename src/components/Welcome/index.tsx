const Welcome = () => {

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-4 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[90px] 2xl:pb-[100px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  <span className="text-primary">Welcome to the Member App</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
