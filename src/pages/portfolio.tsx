import { Head } from "../components/head"

export const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>Jake King - Portfolio</title>
        <meta name="description" content="Jake King (ThatsOurJake) - He/Him 🏳️‍🌈 - Software Developer" />
      </Head>
      <div className="w-screen h-screen flex justify-center items-center flex-col linear bg-linear-to-b from-pink-400 to-rose-100">
        <div className="w-4/5 md:w-3/5 lg:w-1/2 mx-auto">
          <main class="bg-blue-300 border-white border-8 rounded drop-shadow w-w-full px-2 py-4">
            <div class="flex flex-col md:flex-row">
              <div class="w-3/5 md:w-1/3 lg:w-3/12 p-2 mx-auto">
                <div class="relative rounded-full border-4 border-white aspect-square">
                  <img src="https://s.gravatar.com/avatar/cbd78aedd6ddb0b8b60f1dbec61d2822b3a4dbc472cd72458a4dd65ead9da0e9?s=1024" className="rounded-full" />
                  <div class="absolute bottom-0 right-0 w-1/4 aspect-square border-2 border-white rounded-full bg-red-200">
                    <img src="/emoji.webp" className="object-contain p-2" />
                  </div>
                </div>
                <div class="py-2 text-center">
                  <p class="font-bold text-lg">Jake King</p>
                  <p><span class="italic">he/him</span> 🏳️‍🌈</p>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div class="w-full md:w-2/3 lg:w-9/12 py-2 px-4 flex flex-col space-y-2">
                <a href="https://github.com/thatsourjake" class="p-4 border-4 border-white bg-purple-100 hover:bg-purple-200 rounded-md text-lg">💻 Github</a>
                <a href="https://thatsourjake.blog" class="p-4 border-4 border-white bg-purple-100 hover:bg-purple-200 rounded-md text-lg">📚 thatsourjake.blog</a>
              </div>
            </div>
            <div class="mt-1 flex space-x-2 flex-wrap text-sm justify-center">
              <a class="hover:underline" href="https://thatsourjake.co.uk">ThatsOurJake.co.uk</a>
              <a class="hover:underline" href="https://thatsourjake.com">ThatsOurJake.com</a>
              <a class="hover:underline" href="https://jakeki.ng">Jakeki.ng</a>
              <a class="hover:underline" href="https://jake-is.gay">Jake-is.gay</a>
            </div>
          </main>
        </div>
      </div></>
  )
}
