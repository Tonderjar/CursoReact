import PropTypes from 'prop-types'

export const FirstApp = ({title, subTitle, name}) => {

    return (
    <>
        <h1 data-testid='test-title'>{title}</h1>
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        <h2>{subTitle}</h2>
        <h2>{subTitle}</h2>
        <h2>{name}</h2>
    </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps ={
    name: 'Diego',
    subTitle: 'No hay Subtitulo',
    // title: 'No hay titulo',
}
export default FirstApp;