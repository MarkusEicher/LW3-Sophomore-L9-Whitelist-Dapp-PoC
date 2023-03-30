import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Whitelisting dApp using a Merkle Tree - Training project based on lesson 9 of LearnWeb3DAO Sophomore Track',
    keywords: 'Whitelisting dApp Merkle Tree off chain',
    description: 'Using a Merkle Tree to validate off chain registered addresses during the minting process | An practice project by Markus Eicher'
}

export default Meta