import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


const Hoc = (PagesComponent) => {
    return function WithPages() {
        return (
            <div>
                <Header />
                <PagesComponent />
                <Footer />

            </div>
        )

    }

}

export default Hoc