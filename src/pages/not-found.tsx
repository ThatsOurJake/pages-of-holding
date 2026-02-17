export const NotFoundPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col linear bg-linear-to-b from-red-400 to-orange-100">
      <p className="font-bold text-4xl mb-4">You should not have found this page!</p>
      <a href="https://thatsourjake.com">
        <p className="font-bold">Back to safety</p>
      </a>
    </div>
  )
}
