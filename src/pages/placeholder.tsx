import { Head } from "../components/head"

export const PlaceholderPage = () => {
  return (
    <>
      <Head>
        <title>Placeholder Domain</title>
      </Head>
      <div className="w-screen h-screen flex justify-center items-center flex-col linear bg-linear-to-b from-pink-400 to-fuchsia-100">
        <p className="font-bold text-4xl mb-4">Placeholder Domain 🚧</p>
        <p className="italic mb-2">This domain has no content - For now!</p>
        <a href="https://thatsourjake.com">
          <p className="font-bold">Back to safety</p>
        </a>
      </div></>
  )
}
