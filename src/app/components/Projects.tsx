import ProjectCard from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

type Props = {};

export const Projects = (props: Props) => {
  return (
    <div className="container mx-auto">
      <div>
        <SectionTitle titleOne="Selected" titleTwo="Project" />
        <div className="grid grid-cols-12 items-end justify-items-center">
          <ProjectCard
            imageUrl="/img/sushi.png"
            title="Sushi-Street"
            websiteLink="https://sushi-street.com"
            description="Restaurant"
          />
          <ProjectCard
            fullHeight
            imageUrl="/img/nassiha.png"
            title="An-nassiha"
            websiteLink="https://an-nassiha.com/"
            description="Religious Website"
          />
          <ProjectCard
            fullHeight
            imageUrl="/img/bookhunter.png"
            title="Book Hunter"
            websiteLink="https://apps.apple.com/us/app/bookhunter/id1659667251?ign-itscg=30200&ign-itsct=apps_box_badge"
            description="Display book vendor’s offers"
          />
          <ProjectCard
            top
            imageUrl="/img/cloudlink.png"
            title="Cloudlink"
            websiteLink="https://cloudlink.us"
            description="Agency Website"
          />
        </div>
      </div>
    </div>
  );
};
