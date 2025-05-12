module.exports = {
  theme: {
    extend: {
      keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-40px, 60px) scale(1.05)' },
          '66%': { transform: 'translate(20px, -30px) scale(1.15)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(50px, 30px) scale(0.95)' },
          '66%': { transform: 'translate(-30px, -20px) scale(1.1)' },
        },
        blob4: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-20px, 40px) scale(1.08)' },
          '66%': { transform: 'translate(30px, -10px) scale(0.92)' },
        },
        blob5: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -20px) scale(1.12)' },
          '66%': { transform: 'translate(-10px, 30px) scale(0.97)' },
        },
        aurora1: {
          '0%, 100%': { transform: 'translate(-10px, 0px) scale(1)' },
          '50%': { transform: 'translate(40px, -30px) scale(1.08)' },
        },
        aurora2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-30px, 30px) scale(1.12)' },
        },
        aurora3: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(20px, -20px) scale(0.95)' },
        },
        auroraray1: {
          '0%, 100%': { transform: 'translateY(0) scaleX(1)' },
          '50%': { transform: 'translateY(-40px) scaleX(1.05)' },
        },
        auroraray2: {
          '0%, 100%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(30px) scaleY(1.08)' },
        },
        auroraray3: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.1)' },
        },
        auroraray4: {
          '0%, 100%': { transform: 'translateY(0) scaleX(1)' },
          '50%': { transform: 'translateY(40px) scaleX(0.97)' },
        },
      },
      animation: {
        blob1: 'blob1 18s ease-in-out infinite',
        blob2: 'blob2 22s ease-in-out infinite',
        blob3: 'blob3 20s ease-in-out infinite',
        blob4: 'blob4 25s ease-in-out infinite',
        blob5: 'blob5 28s ease-in-out infinite',
        aurora1: 'aurora1 18s ease-in-out infinite',
        aurora2: 'aurora2 22s ease-in-out infinite',
        aurora3: 'aurora3 20s ease-in-out infinite',
        auroraray1: 'auroraray1 18s ease-in-out infinite',
        auroraray2: 'auroraray2 22s ease-in-out infinite',
        auroraray3: 'auroraray3 20s ease-in-out infinite',
        auroraray4: 'auroraray4 25s ease-in-out infinite',
      },
    },
  },
}; 