const cars = [
    {id: 1, name: "بی ام دبلیو" , price: "12,000,000,000 تومان" , description:{مدل:2017, قدرت:400}},
    {id: 2, name: "شورولت کامارو" , price: "15,000,000,000 تومان" , description:{مدل:2018, قدرت:500} },
    {id: 3, name: " لامبورگینی وی 50" , price: "30,000,000,000 تومان", description:{مدل:2020, قدرت:800} },
    {id: 4, name: "آئودی آ3" , price: "10,000,000,000 تومان" , description:{مدل:2026, قدرت:1200}},
    {id: 5, name: "اینفینیتی" , price: "12,000,000,000 تومان" ,description:{مدل:2016, قدرت:600}},
    {id: 6, name: "پورشه کایمان" , price: "20,000,000,000 تومان" ,description:{مدل:2024, قدرت:700}},
    {id: 7, name: "بی ام دبلیو سری 8 کوپه" , price: "8,000,000,000 تومان", description:{مدل:2026, قدرت:800}},
    {id: 8, name: "بی ام دبلیو سری 6" , price: "2,000,000,000 تومان",description:{مدل:2015, قدرت:1000}},
]

const Page = () => {

    const formatPrice = (price) => {
        return price;
    }

    const renderDescription = (description) => {
        return (
            <div className="car-specs">

            </div>
        )
    }
}

export default Page;