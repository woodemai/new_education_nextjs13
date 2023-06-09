'use client'
import {signIn, useSession} from "next-auth/react";
import styles from '../../../styles/profile.module.css'
import ComponentLoad from "@/components/loading/ComponentLoad";
import ReactMarkdown from "react-markdown";

export default async function Profile() {
    const session = useSession()
    if (session.status === 'loading') {
        return (
            <ComponentLoad/>
        )
    } else if (session.status === 'unauthenticated') {
        await signIn()
        return <ComponentLoad/>
    } else if (session.status === 'authenticated' && session.data.user) {
        const user = session.data.user;
        const email = user.email ? user.email : "You don't have an email";
        const image = user.image ? user.image : "/icon.png";
        const name = user.name ? user.name : "Can't load your name";
        return (
            <div className={styles.profile}>
                <img src={image} alt={'avatar'} width={200} height={200}/>
                <ReactMarkdown>{name}</ReactMarkdown>
                <div className={styles.email}>
                    <span>Email</span>
                    <a href={`mailto: ${email}`}>{email}</a>
                </div>
            </div>
        );
    } else {
        return (
            <>
                An error happened!
            </>
        )
    }
}