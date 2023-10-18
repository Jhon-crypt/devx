export default function SkillsForm() {

    return (

        <>

            <div class="relative mb-4">
                <select className="mt-2 select w-full max-w-xs mb-4">
                    <option disabled selected>Your skills</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>

                <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                    <li>
                        <a>
                            <div className="badge badge-outline gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                Html
                            </div></a>
                    </li>
                    <li>
                        <a>
                            <div className="badge badge-outline gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                Css
                            </div></a>
                    </li>
                    <li>
                        <a>
                            <div className="badge badge-outline gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                Javascript
                            </div></a>
                    </li>
                    <li>
                        <a>
                            <div className="badge badge-outline gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                Php
                            </div></a>
                    </li>
                </ul>

                {/*}
                <div class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4">

                   
                    <div class="col-span-1 p-4"><div className="badge badge-ghost gap-2
                    "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>ghost</div></div>
                    <div class="col-span-1 p-4"><div className="badge badge-ghost gap-2
                    "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>ghost</div></div>
                    <div class="col-span-1 p-4"><div className="badge badge-ghost gap-2
                    "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>ghost</div></div>
                    <div class="col-span-1 p-4"><div className="badge badge-ghost gap-2
                    "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>ghost</div></div>
                    <div class="col-span-1 p-4"><div className="badge badge-ghost gap-2
                    "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>ghost</div></div>
                

                </div>
                {*/}

            </div>

        </>

    )

}