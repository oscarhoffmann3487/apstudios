const References = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Våra kunder</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {/* Placeholder for customer logos */}
          {[1, 2, 3, 4].map((index) => (
            <div 
              key={index} 
              className="w-40 h-20 bg-gray-100 rounded flex items-center justify-center"
            >
              <span className="text-gray-400">Logo {index}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;