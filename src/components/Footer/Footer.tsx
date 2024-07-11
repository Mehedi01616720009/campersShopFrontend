const Footer = () => {
    return (
        <div className="bg-[#1d1f7d] py-6">
            <div className="custom__container">
                <div className="border-t border-gray-300 py-5 text-gray-300">
                    &copy; {new Date().getFullYear()} Shopy Campers, Inc. All
                    rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
