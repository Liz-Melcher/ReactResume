// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

import avatar from "../assets/images/IMG_4134.jpeg"

export default function Home() {
    return (
        <div className="container mt-5">
            <div className="text-center p-4 bg-light rounded shadow-sm">
                <img 
                    src={avatar} 
                    alt="Developer Avatar" 
                    className="img-thumbnail rounded-circle d-block mx-auto mb-3"
                    style={{ width: "150px" }} // Controls image size
                />
                <h2 className="mb-3">About Me</h2>
                <p className="lead fs-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt rerum soluta et perspiciatis velit aliquam reprehenderit atque, doloremque eligendi assumenda magnam doloribus quaerat molestias hic corrupti facilis earum quis.
                </p>
                <p className="fs-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi error quibusdam veniam doloribus asperiores! Sint omnis, placeat eaque, atque aliquid sed voluptatibus ea ab cumque dolore nemo sequi fugit esse.
                </p>
            </div>
        </div>
    );
}
//mt-5 centers contents and adds top margin
//text-center centers text
//heading styles
//makes the first paragraph slightly larger; this is bootstrap styling