'use client'

import { useAuth } from '@clerk/nextjs'
import { useQuery } from 'convex/react'
import { api } from '../../../../../convex/_generated/api'
import { Id } from '../../../../../convex/_generated/dataModel'
import ContentForm from '@/components/Admin/ContentForm'
import Link from 'next/link'
import styles from '../../admin.module.css'
import { use } from 'react'

export default function EditContentPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const { isLoaded, isSignedIn } = useAuth()
  const content = useQuery(api.contents.getById, {
    id: id as Id<'contents'>,
  })

  if (!isLoaded) {
    return (
      <div className={styles.adminLayout}>
        <div className={styles.formPage}>
          <p>Cargando...</p>
        </div>
      </div>
    )
  }

  if (!isSignedIn) {
    return (
      <div className={styles.adminLayout}>
        <div className={styles.formPage}>
          <div className={styles.emptyState}>
            <h3>Acceso Denegado</h3>
            <p>Debes iniciar sesion para acceder a esta pagina.</p>
          </div>
        </div>
      </div>
    )
  }

  if (content === undefined) {
    return (
      <div className={styles.adminLayout}>
        <div className={styles.formPage}>
          <p>Cargando...</p>
        </div>
      </div>
    )
  }

  if (content === null) {
    return (
      <div className={styles.adminLayout}>
        <div className={styles.formPage}>
          <Link href="/gestion-contenido" className={styles.backLink}>
            ← Volver al panel
          </Link>
          <p>Contenido no encontrado.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.adminLayout}>
      <div className={styles.formPage}>
        <Link href="/gestion-contenido" className={styles.backLink}>
          ← Volver al panel
        </Link>
        <h2>Editar Contenido</h2>
        <ContentForm mode="edit" initialData={content} />
      </div>
    </div>
  )
}
