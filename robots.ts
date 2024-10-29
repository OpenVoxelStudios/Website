interface RobotOption {
    /**
     * User-agent value.
     * Example: Googlebot
     */
    userAgent: string;
    /**
     * Allowed routes for corresponding User-agent.
     * Example: '/'
     */
    allow?: string | string[];
    /**
     * Disallowed routes for corresponding User-agent.
     * Example: ['/admin', '/confidential']
     */
    disallow?: string | string[];
    /**
     * Crawl-delay option for robot.
     * Example: 2
     */
    crawlDelay?: number;
    /**
     * Clean-param option for robot.
     * Example: 'ref /articles/'
     */
    cleanParam?: string;
};


const robots: RobotOption[] = [
    {
        userAgent: '*',
        allow: '/',
    },
];

export default robots;