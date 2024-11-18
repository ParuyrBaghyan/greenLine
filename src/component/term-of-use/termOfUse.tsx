'use client'
import { useGetPolicyTermsQuery } from '@/services/policyTerms/policyterms'
import style from './termOfUse.module.scss'
import BodyLayout from '@/layouts/bodyLayout/bodyLayout'
import { useTranslations } from 'next-intl'

export default function TermOfUse() {
    const t = useTranslations()
    const { data, isLoading, isError } = useGetPolicyTermsQuery({ identifier: 2 })

    return <BodyLayout>
        <div className={style.policy_terms}>
            <h1>{t('termsAndConditions')}</h1>
            <div dangerouslySetInnerHTML={{ __html: data?.data?.name ?? '' }} ></div>
        </div>
    </BodyLayout>
}