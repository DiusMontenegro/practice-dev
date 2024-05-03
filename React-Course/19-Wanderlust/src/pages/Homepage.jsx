import { Button } from '@/components/ui/button';
import styles from './Homepage.module.css';
import { Link } from 'react-router-dom';
import PageNav from '@/components/PageNav';

export default function Homepage() {
    return (
        <main className={styles.homepage}>
            <PageNav />

            <section>
                <h1>
                    Discover new horizons.
                    <br />
                    Preserve your wanderlust-filled escapades.
                </h1>
                <h2>
                    Explore the world on our digital map, tracing your path
                    through countless cities. Invite friends to relive your
                    global adventures together.
                </h2>
                <Link to="/login">
                    <Button className="cta bg-[#7f5539] hover:bg-[#7f5539] font-semibold h-[30px] hover:bg-opacity-60 text-3xl py-4">
                        Get started tracking.
                    </Button>
                </Link>
            </section>
        </main>
    );
}
