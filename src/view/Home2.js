import {useTranslation} from "react-i18next";

export default function Home2() {
    const { t } = useTranslation('common');
    return(
        <>
            <label>Test thay đổi ngôn ngữ {t('title.name')}</label>
        </>
    );
}