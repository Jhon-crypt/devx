export default function EditContactForm() {

    return (

        <>

            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">Your email</label>
                <input
                    placeholder="youngjohn@mail.com"
                    type="text"
                    id="name"
                    name="name"
                    class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                    Update email
                </button>
            </div>

            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">X(Twitter) link</label>
                <input
                    placeholder="x.com/john"
                    type="text"
                    id="name"
                    name="name"
                    class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                    Update X(Twitter) link
                </button>
            </div>

            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">LinkedIn link</label>
                <input
                    placeholder="x.com/john"
                    type="text"
                    id="name"
                    name="name"
                    class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                    Update linkedin link
                </button>
            </div>

            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">Phone number</label>
                <input
                    placeholder="+234000000000"
                    type="number"
                    id="name"
                    name="name"
                    class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                    Update phone number
                </button>
            </div>

        </>

    )

}