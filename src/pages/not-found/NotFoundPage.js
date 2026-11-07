import {HashLink} from "react-router-hash-link";
import {PageHero} from "../../shared/PageHero";
import {usePageTitle} from "../../hooks/usePageTitle";
import "./NotFoundPage.css";

export const NotFoundPage = () => {
    usePageTitle("Not found");

    return (
        <section className="page-section not-found">
            <PageHero slide="Not found" title="Not found" lead="The page you are looking for does not exist or has moved.">
                <div className="not-found-actions">
                    <HashLink className="section-button" to="/">
                        <button className="vvd"><span>Back to home</span></button>
                    </HashLink>
                    <HashLink className="section-button" to="/projects">
                        <button className="vvd"><span>See my work</span></button>
                    </HashLink>
                </div>
            </PageHero>
        </section>
    );
};
