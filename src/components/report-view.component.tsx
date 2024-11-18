import { Report } from "@/app/user/models/reports";
import Image from "next/image";
import { FC } from "react";

interface ReportProps {
    reports: Report[]
}

const ReportPost: FC<ReportProps> = ({reports}) => {
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Denuncias recientes</h1>
            <div className="flex flex-col items-center w-full max-w-md">
                {reports.map((report) => (
                    <div key={report.id} className="border p-4 rounded-lg shadow-md mb-4 w-full">
                        <h2 className="text-lg font-semibold mb-2">{report.title}</h2>
                        <p className="text-gray-600 mb-1">{report.description}</p>
                        <div className="flex justify-between items-center">
                            <Image 
                                src={report.image}
                                alt=""
                                width={500}
                                height={500} 
                                className="w-24 h-24 object-cover rounded-lg" 
                            />
                            <div className="flex flex-col items-end ">
                                <p className="text-sm text-gray-600 mb-1">+{report.votes} valoraciones</p>
                                <button className="bg-green-500 text-white p-2 rounded-lg">Valorar</button>
                                <p className="text-sm text-gray-600 mb-1">Estado: {report.status}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default ReportPost;