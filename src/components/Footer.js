
const Footer = () => {

    const date = new Date();

    let year = date.getFullYear()

    return (
        <p>Copyright {year}</p>
    )
};

export default Footer;
