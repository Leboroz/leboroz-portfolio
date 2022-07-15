import Card from '../components/Card';
import arrOfProjects from '../utils/projects';

export default function WorkSection() {
  return (
    <section id="work" className="work-section section bg-white flex column">
      <h1 className="letter-gap weight-300 fs-3 mb-1">Projects</h1>
      <h2 className="weight-900 display-1 mb-1">Open Source</h2>
      <div className="card-container flex wrap">
        {arrOfProjects.map(({
            title,
            description,
            image,
            linkLiveVersion,
            linkToSource,
          }) => {
          return (
            <Card 
              key={title}
              title={title}
              description={description}
              button={[linkToSource, linkLiveVersion]}
              img={{
                imgSrc: image,
                imgDescription:title,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
