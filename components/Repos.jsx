import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import { githubUser } from '@/lib/site'

async function getRepos() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUser}/repos?sort=pushed&per_page=30&type=owner`,
      {
        headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'ccddexx-portfolio' },
        next: { revalidate: 3600 },
      },
    )
    if (!response.ok) return []
    const data = await response.json()
    return data
      .filter((repo) => !repo.fork && !repo.archived && repo.html_url.startsWith('https://github.com/'))
      .slice(0, 6)
  } catch {
    return []
  }
}

const formatter = new Intl.DateTimeFormat('id-ID', { month: 'short', year: 'numeric' })

export default async function Repos() {
  const repos = await getRepos()
  if (repos.length === 0) return null

  return (
    <section id="proyek" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="~/proyek"
          index="05"
          title="Repositori Terbaru"
          text="Diambil langsung dari GitHub dan diperbarui secara berkala."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, position) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={(position % 3) * 120}
              className="group flex flex-col rounded-3xl border border-line bg-surface p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-500 hover:-translate-y-1.5 hover:border-green-500/20 hover:shadow-[0_0_40px_rgba(74,222,128,0.07)]"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="min-w-0 break-words font-mono text-base font-medium text-white">{repo.name}</h3>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-3.5 w-3.5 shrink-0 text-zinc-500 transition duration-300 group-hover:text-green-400"
                />
              </div>
              <p className="mt-3 flex-1 break-words text-sm leading-relaxed text-zinc-400">
                {repo.description || 'Belum ada deskripsi.'}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-zinc-500">
                {repo.language ? (
                  <span className="rounded-full border border-line px-3 py-1 text-zinc-300">{repo.language}</span>
                ) : null}
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faStar} className="h-3 w-3" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faCodeBranch} className="h-3 w-3" />
                  {repo.forks_count}
                </span>
                <span>{formatter.format(new Date(repo.pushed_at))}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center" data-aos="fade-up">
          <Button href={`https://github.com/${githubUser}`} variant="info" external>
            <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
            Lihat Semua di GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
