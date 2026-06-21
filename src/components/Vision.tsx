import { motion } from 'framer-motion';
import { fadeUp, inView, stagger } from '../lib/anim.js';

export function Vision() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-28 text-center sm:px-8 sm:py-40">
      <motion.div variants={stagger} {...inView}>
        <motion.p
          variants={fadeUp}
          className="font-display text-balance text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
        >
          One product today.{' '}
          <span className="text-muted-foreground">A portfolio tomorrow.</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
