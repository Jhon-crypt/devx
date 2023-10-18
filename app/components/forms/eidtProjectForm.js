export default function EditProjectForm() {

    return (

        <>

            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">Project title</label>
                <input
                    placeholder="DevX"
                    type="text"
                    id="name"
                    name="name"
                    class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                    Update title
                </button>
            </div>

            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">Project Link</label>
                <input
                    placeholder="www.devx.dev"
                    type="text"
                    id="name"
                    name="name"
                    class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                    Update project link
                </button>
            </div>

            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">Github Link</label>
                <input
                    placeholder="github.com/blahblahblah"
                    type="text"
                    id="name"
                    name="name"
                    class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                    Update github link
                </button>
            </div>

            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">Project cover image</label>
                <input type="file" className="mb-3 file-input file-input-bordered file-input-primary w-full max-w-xs" />
                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                    Update github link
                </button>
            </div>

        </>

    )

}