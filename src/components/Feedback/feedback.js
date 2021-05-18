import {Typography } from "@material-ui/core";

const Feedback = () => {
    var title = "";
    var feedback = "";

    function handleSubmit(event) {
        alert("title: " + title + "feedback: " + feedback);
        event.preventDefault();
    }

    return(
        <div>
            <Typography color="inherit" align="center" variant="h3" marked="center">
                Dar Feedback sobre el tema
            </Typography>
            <form onSubmit={handleSubmit}>
                <label>
                    Título:
                    <input type="text" value={title} />
                </label>
                <label>
                    Opinión:
                    <input type="text" value={feedback} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )};

export default Feedback;