'use client'
import { useGetPolicyTermsQuery } from '@/services/policyTerms/policyterms'
import style from './privacyPolicy.module.scss'
import BodyLayout from '@/layouts/bodyLayout/bodyLayout'
import { useTranslations } from 'next-intl'

export default function PrivacyPolicy() {
    const t = useTranslations()
    const { data, isLoading, isError } = useGetPolicyTermsQuery({ identifier: 1 })

    return <BodyLayout>
        <div className={style.policy_terms}>
            <h1>{t('privacyPolicy')}</h1>
            <div dangerouslySetInnerHTML={{ __html: data?.data?.name ?? '' }} ></div>
        </div>
    </BodyLayout>
}