import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/pageSeo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for Astras AI.',
  pathname: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-void-950 pt-32 pb-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-neon-purple/10 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <div className="glass-panel rounded-2xl p-8 md:p-12 border border-white/10 prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-gray-400 prose-strong:text-white prose-ul:text-gray-400">
            <p className="text-neon-pink font-bold bg-neon-pink/10 p-4 rounded-lg border border-neon-pink/20">
              [DUMMY CONTENT: This is not a real privacy policy. Please replace this text with your own official Privacy Policy drafted by a legal professional.]
            </p>

            <h2>1. Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <ul>
              <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</li>
              <li>Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>

            <h2>4. How We Share Your Information</h2>
            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
