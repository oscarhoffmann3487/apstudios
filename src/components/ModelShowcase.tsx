const ModelShowcase = () => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden">
          <iframe 
            src="https://cloud.agisoft.com/embedded/projects/fea9b912-5d02-4004-9061-7765e96eb4ad/2b40c78d-0ec2-479f-accf-83e8fd3ce06e/?autoplay=1&name=0&mode=Full&scroll=0" 
            className="w-full h-full"
            allow="clipboard-write" 
            allowFullScreen
            style={{ border: 0 }} 
            title="3D Model"
            scrolling="no"
          />
        </div>
      </div>
    </section>
  );
};

export default ModelShowcase;