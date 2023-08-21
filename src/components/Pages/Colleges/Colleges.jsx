import { useEffect, useState } from "react";


const Colleges = () => {
    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/allColleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    console.log(colleges);

    return (
        <div>
            <h1 className="font-semibold text-3xl uppercase text-center my-10">Colleges : {colleges.length}</h1>
            <hr />
            <div className="flex justify-center">
                <div className="mt-10 grid grid-cols-3 gap-5">
                {
                    colleges.map(college => (
                        <div key={college?.id} className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={college?.collegeImage} /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p className="text-semibold text-lg">{college?.collegeName}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success">Details</button>
                        </div>
                    </div>
                </div>
                    ))
                }
                </div>
            </div>
        </div>
    );
};

export default Colleges;