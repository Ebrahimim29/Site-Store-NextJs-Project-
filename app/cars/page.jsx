'use client'

const cars = [
    { id: 1,country: "آلمان", name: "بی ام دبلیو", price: "12,000,000,000 تومان", description: { مدل: 2017, قدرت: 400 } },
    { id: 2,country: "آمریکا", name: "شورولت کامارو", price: "15,000,000,000 تومان", description: { مدل: 2018, قدرت: 500 } },
    { id: 3,country: "ایتالیا", name: " لامبورگینی وی 50", price: "30,000,000,000 تومان", description: { مدل: 2020, قدرت: 800 } },
    { id: 4,country: "آلمان", name: "آئودی آ3", price: "10,000,000,000 تومان", description: { مدل: 2026, قدرت: 1200 } },
    { id: 5,country: "ایتالیا", name: "اینفینیتی", price: "12,000,000,000 تومان", description: { مدل: 2016, قدرت: 600 } },
    { id: 6,country: "ایتالیا", name: "پورشه کایمان", price: "20,000,000,000 تومان", description: { مدل: 2024, قدرت: 700 } },
    { id: 7,country: "آلمان", name: "بی ام دبلیو سری 8 کوپه", price: "8,000,000,000 تومان", description: { مدل: 2026, قدرت: 800 } },
    { id: 8,country: "آلمان", name: "بی ام دبلیو سری 6", price: "2,000,000,000 تومان", description: { مدل: 2015, قدرت: 1000 } },
]

const Page = () => {

    const formatPrice = (price) => {
        return price;
    }

    const renderDescription = (description) => {
        return (
            <div className="car-specs">
                <span>مدل:{description.مدل}</span>
                <span>قدرت:{description.قدرت}</span>
            </div>
        )
    };

    return (
        <section id="featured-cars" className="featured-cars">
            <div className="container">
                <div className="section-header">
                    <h1>نمایشگاه ماشین های لوکس 🚗</h1>
                    <p>بهترین خودروهای لوکس جهان را در اینجا مشاهده کنید</p>
                </div>

                <div className="featured-cars-content">
                    <div className="row">
                        {cars.map((car) => (
                            <div key={car.id} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-featured-cars">
                                    <div className="featured-img-box">
                                        <div className="featured-cars-img">
                                            <img src={`/assets/images/featured-cars/fc${car.id}.png`} 
                                            alt={car.name} 
                                            onError={(e)=>{e.target.src = '/assets/images/placeholder.png';}}/>
                                        </div>
                                        <div className="featured-model-info">
                                            {renderDescription(car.description)}
                                        </div>
                                    </div>
                                    <div className="featured-cars-txt">
                                        <h2><a href={`/car/${car.id}`}>{car.name}</a></h2>
                                        <h3 className="price">{formatPrice(car.price)}</h3>
                                        <div className="car-details">
                                            {car.country}
                                        </div>
                                        <button className="btn-details">
                                            مشاهده جزئیات
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page;