const Groups = ({ nameRef, descRef, groups, createGroup, error, loading }) => {
  return (
    <div className="flex hard-shadow flex-col justify-center items-center gap-5 bg-gray-800 p-5 rounded-3xl text-white">
      <h1 className="border-b-2 border-indigo-600 w-full text-center text-2xl">
        Grupos
      </h1>
      <form
        onSubmit={(e) => createGroup(e)}
        className="flex flex-col items-center gap-5 mb-9 lg:h-full lg:justify-evenly"
      >
        <label htmlFor="name" className="text-xl font-light uppercase">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="
							text-black
              rounded-md p-2
              outline-none ring-2 ring-indigo-300 
              focus:ring-gray-600 tranistion ease-out duration-300 lg:h-12"
          ref={nameRef}
        />
        <label htmlFor="desc" className="text-xl font-light uppercase">
          Descripcion
        </label>
        <textarea
          type="text"
          name="descripcion"
          id="descripcion"
          className="
							resize-none
							text-black
              rounded-md p-2
              outline-none ring-2 ring-indigo-300 
              focus:ring-gray-600 tranistion ease-out duration-300 lg:h-32"
          ref={descRef}
        />
        <div className="flex w-full justify-around items-center">
          <button
            disabled={loading}
            type="submit"
            className="border-2 text-white bg-indigo-800 p-2 px-4 rounded-lg uppercase hover:border-gray-600 hover:bg-white hover:text-black transition ease-out duration-300"
          >
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Groups;
