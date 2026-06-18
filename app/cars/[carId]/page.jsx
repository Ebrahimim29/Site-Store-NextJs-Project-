const Page = ({params, searchParams}) => {

    return(
        <div>
            car Id:
            {params.carId}

            <br />
            car Name:
            {searchParams.name}

            <br />
            color Car:
            {searchParams.color}



        </div>
    )
};

export default Page;