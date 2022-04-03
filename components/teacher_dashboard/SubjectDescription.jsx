const SubjectDescription = ({ className, description }) => {
  return (
    <p className={`${className} text-sm text-customGrey`}>
      { description }
    </p>
  )
}

export default SubjectDescription