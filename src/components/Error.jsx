const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-center p-1 text-white mb-3 rounded-md font-semibold">
        <p>{ mensaje }</p>
    </div>
  )
}

export default Error