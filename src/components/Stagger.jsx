import { motion } from "framer-motion";
import { DURATION, EASE, revealVariants, staggerContainer } from "../lib/motion";

/**
 * Stagger + Stagger.Item
 * Use for groups that should reveal in sequence: card grids, client logos,
 * timeline entries, service lists.
 *
 * <Stagger className="grid grid-cols-3 gap-6">
 *   {items.map(item => <Stagger.Item key={item.id} as="up">...</Stagger.Item>)}
 * </Stagger>
 */
function Stagger({ children, gap = 0.08, delay = 0, once = true, amount = 0.2, className, ...rest }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={staggerContainer(gap, delay)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ as = "up", duration = DURATION.fast, className, children, ...rest }) {
  const variant = revealVariants[as] ?? revealVariants.up;
  return (
    <motion.div
      className={className}
      variants={variant}
      transition={{ duration, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

Stagger.Item = StaggerItem;
export default Stagger;
