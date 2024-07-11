import { Link } from "react-router-dom"

/** La page Erreur s'affiche si mon Url n'est pas reconnu, un lien sur la page est affiché pour pouvoir être redirigé vers la page d'accueil en cliquant dessus**/
const PageErreur = () => {
    return (
        <div className="error">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
            <p>
                <Link to="/">Retourner sur la page d&apos;accueil</Link>
            </p>
        </div>
    )
}

export default PageErreur
