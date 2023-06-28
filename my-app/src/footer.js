const Footer = () => {
    var today = new Date();
    return (
        <footer>
            <div>
                <div>
                    <h2>Team Member Allocation App - {today.getFullYear()}</h2>
                </div>
            </div>
        </footer>
    )
}
export default Footer