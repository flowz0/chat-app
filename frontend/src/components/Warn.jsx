const Warn = ({ message }) => {
  return (
    <p className="mt-2 py-0.5 px-1.5 rounded-xl text-sm bg-red-500 text-zinc-100 w-fit">
      {message}
    </p>
  )
};

export default Warn;