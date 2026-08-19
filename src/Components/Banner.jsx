const Banner = (props) => {
    const titleStyle = {
        margin: 0,
        fontSize: '15px',
        color: '#000'
    }

    return (
        <section>
            <h1 style={titleStyle}>{props.children}</h1>
        </section>
    )
}

export default Banner;