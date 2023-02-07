type proptypes = {
  img: string,
  label: string,
}

const TechTag = ({ img, label }: proptypes) => {
  return (
    <div className="tech-tag">
      <figure>
        <img src={img} alt={label} />
      </figure>
      <h4 className="text-white">{label}</h4>
    </div>
  )
}

export default TechTag;
