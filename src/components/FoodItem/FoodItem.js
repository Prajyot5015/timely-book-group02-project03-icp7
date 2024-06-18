import "./FoodItem.css"

function FoodImage({ src, alt }) {
    return <img src={src} className="hero-section-img" alt={alt} />;
}





function FoodImages() {
    const foodItems = [
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_HXwTtOOen4bSCupK5Zs7IKWMxKlBEbvWw&usqp=CAU", alt: "Sandwich" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIp8_Jluj9f6l_3fDhd0k_pjWOhD_3XnbeQ&usqp=CAU", alt: "Burger" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc4-qs_r3mxPNc7quMNCSvzp_B8v4czfjdTKfDMLR6zlrNGW_vY8QZgViTCuXHHap2pgM&usqp=CAU", alt: "Popcorn" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6etN5PN9mt1mEev4ysisVMx6SMZ6tdrT5CA&usqp=CAU", alt: "Pizza" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YjoB_TRp3N-syWRKfXMIsS84Xu5xgad_Nw&usqp=CAU", alt: "Coke" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYUWd0x4cgZEPQmM2AIesVIHgossBLJfomg&usqp=CAU", alt: "Nachos" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESajLr22pA4vQxWVjwZGK75BN85jEXDIIMA&usqp=CAU", alt: "Wraps" },
    ];

    return (
        <div className="food-images">
            {foodItems.map((food, index) => (
                <FoodImage key={index} src={food.src} alt={food.alt} />
            ))}
        </div>
    );
}

export default FoodImages;