import React from 'react';
import Card from '../Card/Card';
import "./CardBox.scss";

const CardBox = () => {
    // Dummy data example
    const products = [
        { 
          id: 1,
          name: 'Force Majeure Oversized Unisex Fit', 
          price: 70, 
          imageUrl: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
          stock: 10, 
          discount: false, 
          hot: false 
        },
        { 
          id: 2, 
          name: 'Baggy Urban Lskd.co Black T-shirt', 
          price: "7,000", 
          imageUrl: 'https://images.unsplash.com/photo-1618453292459-53424b66bb6a?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
          stock: 10, 
          discount: true, 
          hot: false 
        },
        { 
          id: 3, 
          name: 'Cobbles Classic Off-White T-shirt', 
          price: 120, 
          imageUrl: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
          stock: 5, 
          discount: false, 
          hot: false 
        },
        { 
          id: 4, 
          name: 'Todd Snyder Laidback Linen Shirt for Women', 
          price: 120, 
          imageUrl: 'https://images.unsplash.com/photo-1508853363419-a9263d752c59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
          stock: 5, 
          discount: false, 
          hot: false 
        },
        { 
          id: 5, 
          name: 'Executive Elegance Dotted T-Shirt', 
          price: 120, 
          imageUrl: 'https://images.pexels.com/photos/833169/pexels-photo-833169.jpeg', 
          stock: 0, 
          discount: false, 
          hot: false 
        },
        { 
          id: 6, 
          name: 'Dior and Stone Island Polo for kids', 
          price: 120, 
          imageUrl: 'https://cdn3.photostockeditor.com/c/2812/united%20states-person-wearing-white-and-black-shirt-standing-near-wall-fashion-fashion-image.jpg', 
          stock: 10, 
          discount: false, 
          hot: false 
        },
        { 
          id: 7, 
          name: 'Silken Dreams Chiffon Top', 
          price: 120, 
          imageUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg', 
          stock: 5, 
          discount: false, 
          hot: false 
        },
        { 
          id: 8, 
          name: 'Bonobos Classic Comfort Pyjama Set', 
          price: 120, 
          imageUrl: 'https://images.pexels.com/photos/2049315/pexels-photo-2049315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
          stock: 5, 
          discount: true, 
          hot: false 
        },
        { 
          id: 9, 
          name: 'Urban Adventure Henley White Top', 
          price: 120, 
          imageUrl: 'https://images.unsplash.com/photo-1699459867100-4ecf9eceb0e5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
          stock: 5, 
          discount: true, 
          hot: false 
        },
        { 
          id: 10, 
          name: 'Sunset Serenade Sundress for Kids', 
          price: 120, 
          imageUrl: 'https://images.unsplash.com/photo-1677131618941-1888022e9ba8?q=80&w=1356&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
          stock: 5, 
          discount: false, 
          hot: false 
        },
        { 
          id: 11, 
          name: 'Timeless Tailored Shirt and Trousers', 
          price: 120, 
          imageUrl: 'https://images.unsplash.com/photo-1681892012536-49619a370ab9?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
          stock: 5, 
          discount: false, 
          hot: false 
        },
        { 
          id: 12, 
          name: 'Graceful Glide Midi Brown Jacket', 
          price: 120, 
          imageUrl: 'https://images.unsplash.com/photo-1673448270138-50f51c554ba4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
          stock: 0, 
          discount: false, 
          hot: false 
        },
        // Add more products as needed
    ];

    return (
        <div className="cardbox">
            {/* <h2>Products</h2> */}
            <div className="product-list">
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CardBox;