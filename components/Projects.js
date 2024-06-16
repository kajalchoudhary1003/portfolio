import Cards from "./Cards";

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-around bg-primary lg:pb-4">
      {/* on md this card will take half screen size on lg it will take half but on xl it will take one-third */}
      <div className="w-full md:w-1/2 xl:w-1/3 flex justify-center p-2">
      <Cards
        title="Chat Application"
        description="sjdhksahdkushujkxjhsxhjbsx"
      />
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 flex justify-center p-2">
      <Cards title="Blog Application" description="djhdischsdcgdscvxsdc" />
      </div>
     <div className="w-full md:w-1/2 xl:w-1/3 flex justify-center p-2">
     <Cards title="Youtube Comment Analyzer" description="hsgadhjsghcgsvc" />
     </div>
      
    </div>
  );
};

export default Projects;
