import * as React from "react";
import { Form, Link } from "react-router-dom";
import Datepicker from "react-tailwindcss-datepicker"; 

function Servicio(){

    const [register, setRegister] = React.useState(false);
    const [value, setValue] = React.useState({ 
            startDate: null ,
            endDate: null 
        }); 
        
        const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
        } 

    return (
        <>  {register ? (
            <div className="bg-white p-4 rounded-md mt-4">
                <h2 className="text-gray-500 text-lg font-semibold pb-4">Registro</h2>
                <div className="my-1"></div> 
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 

                <Form >
                    <h4 className=" text-gray-500 text-lg font-semibold pb-4">BUSCAR PERSONA</h4>
                    <div className="grid grid-cols-3">
                        <div className="ml-2 mr-2">
                            <label htmlFor="">Tipo de Documento</label>
                            <input type="text" className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300  border-solid " />
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="">Numero de Documento</label>
                            <input type="text" className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300  border-solid " />
                        </div>
                        <div className="ml-2 mt-6">
                            <button type="button" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 mr-1 rounded ">
                                <i className="fas fa-search"></i> Buscar
                            </button>
                        </div>
                    </div>

                    <h4 className="mt-3 mb-2 text-gray-500 text-lg font-semibold pb-4">DATOS PERSONALES</h4>
                    <div className="grid grid-cols-4">
                        <div className="ml-2 mr-2">
                            <label htmlFor="">Apellidos</label>
                            <input type="text" className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300  border-solid " />
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="">Nombres</label>
                            <input type="text" className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300  border-solid " />
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="">Edad</label>
                            <input type="text" className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300  border-solid " />
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="">Telefono</label>
                            <input type="text" className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300  border-solid " />
                        </div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="ml-2 mr-2">
                            <label htmlFor="">Dirección</label>
                            <input type="text" className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300  border-solid " />
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="">Referencia</label>
                            <input type="text" className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300  border-solid " />
                        </div>
                    </div>

                    <div className="grid grid-cols-3">
                        <div className="ml-2 mr-2">
                            <label htmlFor="">Email</label>
                            <input type="text" className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300  border-solid " />
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="">Fecha</label>
                            <input type="text" className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300  border-solid " />
                        </div>
                    </div>
                    <h4 className="mt-3 text-gray-500 text-lg font-semibold pb-4">ESTA INFORMACION ES ESTRICTAMENTE CONFIDENCIAL: (Marca con una X)</h4>

                    <div className="grid grid-cols-2 mb-2">
                        <div className="ml-2 mr-2">
                            <label htmlFor=""><i class="far fa-circle"></i> Te encuentras en estado de Gestación?</label>
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="" className="ml-4 mr-4">
                                SI
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                            <label htmlFor="" className="ml-4 mr-4">
                                NO
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mb-2">
                        <div className="ml-2 mr-2">
                            <label htmlFor=""><i class="far fa-circle"></i> Eres alérgica a la anestesia?</label>
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="" className="ml-4 mr-4">
                                SI
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                            <label htmlFor="" className="ml-4 mr-4">
                                NO
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mb-2">
                        <div className="ml-2 mr-2">
                            <label htmlFor=""><i class="far fa-circle"></i> Tienes algún trastorno con la coagulación?</label>
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="" className="ml-4 mr-4">
                                SI
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                            <label htmlFor="" className="ml-4 mr-4">
                                NO
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mb-2">
                        <div className="ml-2 mr-2">
                            <label htmlFor=""><i class="far fa-circle"></i> Es usted nerviosa?</label>
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="" className="ml-4 mr-4">
                                SI
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                            <label htmlFor="" className="ml-4 mr-4">
                                NO
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mb-2">
                        <div className="ml-2 mr-2">
                            <label htmlFor=""><i class="far fa-circle"></i> Has tenido hepatitis?</label>
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="" className="ml-4 mr-4">
                                SI
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                            <label htmlFor="" className="ml-4 mr-4">
                                NO
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mb-2">
                        <div className="ml-2 mr-2">
                            <label htmlFor=""><i class="far fa-circle"></i> Presenta problemas con la pigmentación?</label>
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="" className="ml-4 mr-4">
                                SI
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                            <label htmlFor="" className="ml-4 mr-4">
                                NO
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mb-2">
                        <div className="ml-2 mr-2">
                            <label htmlFor=""><i class="far fa-circle"></i> Presenta problemas de la piel?</label>
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="" className="ml-4 mr-4">
                                SI
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                            <label htmlFor="" className="ml-4 mr-4">
                                NO
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mb-2">
                        <div className="ml-2 mr-2">
                            <label htmlFor=""><i class="far fa-circle"></i> Presenta problemas de cicatrización?</label>
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="" className="ml-4 mr-4">
                                SI
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                            <label htmlFor="" className="ml-4 mr-4">
                                NO
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mb-2">
                        <div className="ml-2 mr-2">
                            <label htmlFor=""><i class="far fa-circle"></i> Se ha realizado alguna intervención quirúrgica?</label>
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="" className="ml-4 mr-4">
                                SI
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                            <label htmlFor="" className="ml-4 mr-4">
                                NO
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 ">
                        <div className="ml-2 mr-2">
                            <label htmlFor=""><i class="far fa-circle"></i> Es usted nerviosa?</label>
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="" className="ml-4 mr-4">
                                SI
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                            <label htmlFor="" className="ml-4 mr-4">
                                NO
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 ">
                        <div className="ml-16 mr-2">
                            <label htmlFor="">Si la respuesta es SI, dígame hace cuánto tiempo?</label>
                        </div>
                        <div className="ml-2 mr-2">
                            <input type="text" className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300  border-solid " />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mb-2">
                        <div className="ml-2 mr-2">
                            <label htmlFor=""><i class="far fa-circle"></i> Anteriormente se ha realizado Maquillaje permanente?</label>
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="" className="ml-4 mr-4">
                                SI
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                            <label htmlFor="" className="ml-4 mr-4">
                                NO
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mb-2">
                        <div className="ml-2 mr-2">
                            <label htmlFor=""><i class="far fa-circle"></i> Se ha realizado algún tatuaje?</label>
                        </div>
                        <div className="ml-2 mr-2">
                            <label htmlFor="" className="ml-4 mr-4">
                                SI
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                            <label htmlFor="" className="ml-4 mr-4">
                                NO
                                <input type="radio" className="ml-2 mr-2" name="" id="" />
                            </label>
                        </div>
                    </div>
                </Form>

                <div className="my-1"></div> 
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                <div className="grid grid-cols-2">
                    <div className="text-left">
                        <button type="button" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 mr-1 rounded ">
                            <i className="fas fa-save"></i> Guardar
                        </button>
                    </div>
                    <div className="text-right">
                        <button type="button" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded  " onClick={()=> setRegister(!register)}>
                            <i className="fas fa-times"></i> Salir
                        </button>
                    </div>
                </div>
            </div>
        ) : (
            <div className="bg-white p-4 rounded-md mt-4">
                <div className="grid grid-cols-2">
                    <h2 className="text-gray-500 text-lg font-semibold pb-4">Lista</h2>
                    <div className="text-right">
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded" onClick={()=> setRegister(!register)}>
                            <i className="fas fa-plus-circle"></i> Agregar
                        </button>
                    </div>
                </div>
                <div className="my-1"></div> 
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="mb-4">
                            <label >Numero de Documento: </label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                            placeholder="Name*"
                            required
                        />
                    </div>

                    <div className="mb-4">
                            <label >Fecha: </label>
                            <Datepicker inputClassName="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                                useRange={false} 
                                asSingle={true} 
                                value={value} 
                                onChange={handleValueChange} 
                                displayFormat={"DD/MM/YYYY"} 
                                />
                    </div>

                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 hover:to-indigo-400 text-white font-semibold mt-5 py-3 px-4 rounded" >
                            <i className="fas fa-search"></i> Buscar
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="text-left mt-4">
                        <span>Mostrando 1 de 10</span>
                    </div>
                    <div className="text-right mt-4">
                        <span className="pr-2">Ver</span>
                        <select className="border border-grey-light">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                </div>
                <table className="w-full table-auto text-sm border-t border-grey-light">
                    <thead>
                        <tr className="text-sm leading-normal">
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">DNI</th>
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre cliente</th>
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Fecha</th>
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Servicio</th>
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Fecha de Evaluación</th>
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Monto</th>
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-center">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td className="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                            <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td className="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                            <td className="py-2 px-4 border-b border-grey-light text-right">$1500</td>
                            <td className="py-2 px-4 border-b border-grey-light text-center">
                                <Link className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 mr-1 rounded"><i className="fas fa-edit"></i></Link>
                                <Link className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"><i className="fas fa-trash-alt"></i></Link>
                            </td>
                        </tr>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td className="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                            <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td className="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                            <td className="py-2 px-4 border-b border-grey-light text-right">$1500</td>
                            <td className="py-2 px-4 border-b border-grey-light text-center">
                                <Link className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 mr-1 rounded"><i className="fas fa-edit"></i></Link>
                                <Link className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"><i className="fas fa-trash-alt"></i></Link>
                            </td>
                        </tr>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td className="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                            <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td className="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                            <td className="py-2 px-4 border-b border-grey-light text-right">$1500</td>
                            <td className="py-2 px-4 border-b border-grey-light text-center">
                                <Link className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 mr-1 rounded"><i className="fas fa-edit"></i></Link>
                                <Link className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"><i className="fas fa-trash-alt"></i></Link>
                            </td>
                        </tr>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td className="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                            <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td className="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                            <td className="py-2 px-4 border-b border-grey-light text-right">$1500</td>
                            <td className="py-2 px-4 border-b border-grey-light text-center">
                                <Link className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 mr-1 rounded"><i className="fas fa-edit"></i></Link>
                                <Link className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"><i className="fas fa-trash-alt"></i></Link>
                            </td>
                        </tr>
                        
                        
                    </tbody>
                </table>

                <div class="flex justify-center pt-4">
                    <nav class="flex space-x-2" aria-label="Pagination">
                        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                            Previous
                        </a>
                        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                            1
                        </a>
                        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                            2
                        </a>
                        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                            3
                        </a>
                        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                            Next
                        </a>
                    </nav>
                </div>

                
            </div>
            )}
        </>
    );
}

export default Servicio;