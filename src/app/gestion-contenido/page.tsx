'use client'

import { useState } from 'react'
import { useQuery } from 'convex/react'
import { useAuth, UserButton } from '@clerk/nextjs'
import { api } from '../../../convex/_generated/api'
import ContentList from '@/components/Admin/ContentList'
import Link from 'next/link'
import styles from './admin.module.css'

export default function AdminDashboard() {
  const { isLoaded, isSignedIn } = useAuth()
  const contents = useQuery(api.contents.getAll)
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')

  if (!isLoaded) {
    return (
      <div className={styles.adminLayout}>
        <div className={styles.container}>
          <p>Cargando...</p>
        </div>
      </div>
    )
  }

  if (!isSignedIn) {
    return (
      <div className={styles.adminLayout}>
        <div className={styles.container}>
          <div className={styles.emptyState}>
            <h3>Acceso Denegado</h3>
            <p>Debes iniciar sesion para acceder al panel de administracion.</p>
          </div>
        </div>
      </div>
    )
  }

  const filteredContents = contents?.filter((c) => {
    if (statusFilter !== 'all' && c.status !== statusFilter) return false
    if (categoryFilter !== 'all' && c.category !== categoryFilter) return false
    return true
  })

  return (
    <div className={styles.adminLayout}>
      <header className={styles.adminHeader}>
        <h1>Panel de Contenido</h1>
        <nav className={styles.adminNav}>
          <Link href="/">Ir al sitio</Link>
          <Link href="/blog">Ver blog publico</Link>
          <UserButton />
        </nav>
      </header>

      <div className={styles.container}>
        <div className={styles.dashboardHeader}>
          <h2>Contenido ({filteredContents?.length ?? 0})</h2>
          <Link href="/gestion-contenido/crear" className={styles.createBtn}>
            + Crear Contenido
          </Link>
        </div>

        <div className={styles.filters}>
          <select
            className={styles.filterSelect}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Todos los estados</option>
            <option value="published">Publicados</option>
            <option value="draft">Borradores</option>
          </select>

          <select
            className={styles.filterSelect}
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">Todas las categorias</option>
            <option value="rodilla">Rodilla</option>
            <option value="espalda">Espalda</option>
            <option value="cuello">Cuello</option>
            <option value="cadera">Cadera</option>
            <option value="ciatica">Ciática</option>
            <option value="hernia">Hernia</option>
            <option value="canal-lumbar">Canal Lumbar</option>
            <option value="enfermedad-discal">Enfermedad Discal</option>
            <option value="artrosis-lumbar">Artrosis Lumbar</option>
            <option value="general">General</option>
          </select>
        </div>

        {filteredContents === undefined ? (
          <p>Cargando...</p>
        ) : (
          <ContentList contents={filteredContents} />
        )}
      </div>
    </div>
  )
}
