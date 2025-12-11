import React from "react";
import { motion, Variants } from "framer-motion";
import { TrendingUp, Home, Search, MapPin } from "lucide-react";

// --- Configuration Data ---
const DATA = {
  homeValues: {
    growth: "+12% YOY",
    trend: "Steady Growth",
  },
  mortgageRates: {
    rate: "7.2%",
    trend: "Flat Trend",
  },
  keyTakeaways: [
    "Inventory remains low.",
    "Buyer competition is high.",
    "Interest rates are stable.",
    "Suburban areas are popular.",
  ],
  marketShare: [
    { region: "SUBURBAN", share: 60, color: "bg-gray-800" },
    { region: "RURAL", share: 15, color: "bg-amber-600" },
    { region: "URBAN", share: 25, color: "bg-amber-400" },
  ],
};

// --- Framer Motion Variants ---
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const pieChartVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// --- Helper Components ---

const ChartGrowth = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
    className="relative h-24 w-full origin-left overflow-hidden rounded-xl bg-amber-50"
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/50 to-amber-200/50"></div>
    <TrendingUp
      className="absolute right-[-10px] top-[-10px] h-36 w-36 text-amber-500/80"
      strokeWidth={0.5}
    />
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
      <polyline
        fill="none"
        stroke="#F59E0B"
        strokeWidth="3"
        points="0,80 20,60 40,70 60,40 80,50 100,20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </motion.div>
);

// Simplified Pie Chart
const PieChart = () => {
  const suburban =
    DATA.marketShare.find((d) => d.region === "SUBURBAN")?.share || 0;
  const rural = DATA.marketShare.find((d) => d.region === "RURAL")?.share || 0;
  const urban = DATA.marketShare.find((d) => d.region === "URBAN")?.share || 0;

  const conicGradient = `conic-gradient(
    #1F2937 0% ${suburban}%,
    #D97706 ${suburban}% ${suburban + rural}%,
    #FBBF24 ${suburban + rural}% 100%
  )`;

  return (
    <motion.div
      className="relative flex h-full w-full items-center justify-center p-4"
      variants={pieChartVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className="h-48 w-48 rounded-full shadow-xl"
        style={{ background: conicGradient }}
      />
      <MapPin className="absolute right-0 top-0 h-8 w-8 text-gray-800" />
    </motion.div>
  );
};

// --- Main Component ---
export const Trends: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          📊 Real Estate Market Snapshot
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Section 1 */}
          <div className="lg:col-span-1">
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={cardVariants}>
                <ChartGrowth />
              </motion.div>

              <motion.div
                custom={1}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl bg-white p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <Home className="h-6 w-6 text-amber-500" />
                  <h2 className="text-xl font-bold text-gray-800">
                    HOME VALUES:
                  </h2>
                </div>
                <p className="mt-3 text-3xl font-extrabold text-amber-600">
                  {DATA.homeValues.growth}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  - {DATA.homeValues.trend}
                </p>
              </motion.div>

              <motion.div
                custom={2}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl bg-white p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <Search className="h-6 w-6 text-amber-500" />
                  <h2 className="text-xl font-bold text-gray-800">
                    MORTGAGE RATES:
                  </h2>
                </div>
                <p className="mt-3 text-3xl font-extrabold text-amber-600">
                  {DATA.mortgageRates.rate}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  - {DATA.mortgageRates.trend}
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Section 2 */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="rounded-xl bg-white p-8 shadow-2xl"
          >
            <h2 className="mb-6 text-2xl font-extrabold text-gray-900">
              🔑 KEY TAKEAWAYS
            </h2>
            <ul className="space-y-4">
              {DATA.keyTakeaways.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex text-lg font-medium text-gray-700"
                >
                  <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-amber-500"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            custom={4}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="rounded-xl bg-amber-50 p-6 shadow-2xl"
          >
            <h2 className="text-center text-2xl font-extrabold text-gray-900">
              🌍 MARKET SHARE BY REGION
            </h2>
            <div className="flex flex-col items-center gap-6 pt-4 lg:flex-col">
              <PieChart />

              <div className="w-full space-y-2">
                {DATA.marketShare.map((item, index) => (
                  <motion.div
                    key={item.region}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex justify-between rounded-lg p-3 font-semibold shadow-md"
                    style={{
                      backgroundColor:
                        item.color === "bg-gray-800"
                          ? "#1F2937"
                          : item.color === "bg-amber-600"
                          ? "#D97706"
                          : "#FBBF24",
                      color: item.region === "URBAN" ? "#1F2937" : "white",
                      transformOrigin: "left",
                    }}
                  >
                    <span>{item.region}</span>
                    <span>{item.share}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
