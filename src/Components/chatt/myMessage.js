const MyMessage = ({ message }) => {
    if (message?.attachments?.lenght > 0)
    {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachments"
                className="message-images"
                style={{float:'right'}}
            />
        )
        }
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            {message.text}
        </div>
    )
}
export default MyMessage;